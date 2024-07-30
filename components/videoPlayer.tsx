import React, { useRef, useState } from 'react';
import { View, StyleSheet, Button } from 'react-native';
import { Video } from 'expo-av';

const VideoPlayer = () => {
  const video = useRef(null);
  const [status, setStatus] = useState({});

  return (
    <View style={styles.container}>
      <Video
        ref={video}
        style={styles.video}
        source={{ uri: 'https://www.w3schools.com/html/mov_bbb.mp4' }}
        useNativeControls ={false}
        shouldPlay
        isLooping
        onPlaybackStatusUpdate={status => setStatus(() => status)}
      />
      {/* <View style={styles.buttons}>
        <Button
          title={status.isPlaying ? "Pause" : "Play"}
          onPress={() =>
            status.isPlaying ? video.current.pauseAsync() : video.current.playAsync()
          }
        />
      </View> */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  video: {
    width: '100%',
    height: 200,
  },
  buttons: {
    margin: 10,
  },
});

export default VideoPlayer;