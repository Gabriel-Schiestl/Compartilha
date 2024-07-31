import React, { useRef, useState } from "react";
import { View, StyleSheet, Button, Pressable } from "react-native";
import { Video, ResizeMode } from "expo-av";
import { Ionicons } from "@expo/vector-icons";

const VideoPlayer = () => {
  const video = useRef<Video>(null);
  const [status, setStatus] = useState({});
  const [isPlaying, setIsPlaying] = useState(false);

  const handleStart = () => {
    if (!isPlaying && video.current) {
      video.current.playAsync();
      setIsPlaying(true);
    } else {
      video.current?.pauseAsync();
      setIsPlaying(false);
    }
  };

  return (
    <Pressable style={styles.container} onPress={handleStart}>
      {!isPlaying ? (
        <View style={styles.playButton}>
          <Ionicons
            name="play"
            size={16}
            color={"#000"}
            style={styles.playIcon}
          />
        </View>
      ) : null}
        <Video
          ref={video}
          style={styles.video}
          source={{ uri: "https://www.w3schools.com/html/mov_bbb.mp4" }}
          useNativeControls={false}
          resizeMode={ResizeMode.COVER}
          onPlaybackStatusUpdate={(status) => setStatus(() => status)}
        />
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  video: {
    width: "100%",
    height: 200,
  },
  playButton: {
    backgroundColor: "rgba(0,0,0,0.3)",
    borderRadius: 50,
    padding: 7,
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: [{ translateX: -15 }, { translateY: -15 }],
    zIndex: 1,
  },
  playIcon: {
    alignSelf: "center",
  },
});

export default VideoPlayer;
