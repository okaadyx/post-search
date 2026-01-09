import PostCard from "@/components/posts/PostCard";
import SearchComponent from "@/components/SearchComponent";
import useInternetStatus from "@/components/useInternetStatus";
import { queryClient } from "@/lib/queryClient";
import { api } from "@/services";
import { Post } from "@/services/posts/types";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useQuery } from "@tanstack/react-query";
import { useEffect, useState } from "react";
import {
  ActivityIndicator,
  FlatList,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const [refreshing, setRefreshing] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const isOnline = useInternetStatus();

  const { data, isLoading, isError } = useQuery({
    queryKey: ["posts"],
    queryFn: () => api.posts.fetchPosts(),
    staleTime: 1000 * 60 * 5,
  });

  useEffect(() => {
    (async () => {
      const saved = await AsyncStorage.getItem("SearchQuery");
      if (saved) setSearchQuery(saved);
    })();
  }, []);

  const onRefresh = async () => {
    setRefreshing(true);
    await queryClient.invalidateQueries({ queryKey: ["posts"] });
    await AsyncStorage.removeItem("SearchQuery");
    setSearchQuery("");
    setRefreshing(false);
  };

  const handleSearch = async (text: string) => {
    setSearchQuery(text);
    await AsyncStorage.setItem("SearchQuery", text);
  };

  const filteredPosts: Post[] | undefined = !searchQuery.trim()
    ? (data as Post[] | undefined)
    : (data as Post[] | undefined)?.filter(
        (item: { title: string; body: string }) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase())
      );

  if (isLoading && !data) {
    return (
      <View style={styles.loading}>
        <ActivityIndicator size={"large"} />
        <Text>Loading..</Text>
      </View>
    );
  }

  if (isError && !data) {
    return (
      <View style={styles.loading}>
        <Text>Something went wrong</Text>
      </View>
    );
  }
  return (
    <SafeAreaView style={styles.container}>
      <SearchComponent query={searchQuery} setQuery={handleSearch} />
      {!isOnline && (
        <View style={styles.offlineBanner}>
          <Text style={styles.offlineText}>You’re offline</Text>
        </View>
      )}
      {searchQuery && !filteredPosts?.length ? (
        <View style={styles.loading}>
          <Text>No Posts Found</Text>
        </View>
      ) : (
        <FlatList
          data={filteredPosts}
          onRefresh={onRefresh}
          refreshing={refreshing}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <PostCard title={item.title} body={item.body} />
          )}
          contentContainerStyle={styles.list}
          showsVerticalScrollIndicator={false}
        />
      )}
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F5F7FA",
    alignItems: "center",
  },
  loading: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
  },
  list: {
    padding: 16,
    gap: 12,
  },
  offlineBanner: {
    backgroundColor: "#FFCC00",
    padding: 8,
    width: "100%",
    alignItems: "center",
  },
  offlineText: {
    color: "#333",
    fontWeight: "600",
  },
});
