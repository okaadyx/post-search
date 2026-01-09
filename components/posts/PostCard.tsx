import React from "react";
import { StyleSheet, Text, View } from "react-native";

interface PostProps {
  title: string;
  body: string;
  isLoading: boolean;
}

const SkeletonProps = {
  colorMode: "light" as const,
  transition: {
    type: "decay",
    duration: 2000,
  },
};

const PostCard = ({ title, body, isLoading }: PostProps) => {
  return (
    <View style={styles.card}>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.body}>{body}</Text>
    </View>
  );
};

export default PostCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    padding: 16,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },
  title: {
    fontSize: 18,
    fontWeight: "700",
    color: "#1F2937",
    marginBottom: 8,
    textTransform: "capitalize",
  },
  body: {
    fontSize: 14,
    color: "#4B5563",
    lineHeight: 20,
  },
});
