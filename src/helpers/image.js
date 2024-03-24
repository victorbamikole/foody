import { View, Text, Image } from "react-native";
import React, { useEffect, useState } from "react";
import Animated, { FadeInDown } from "react-native-reanimated";
import AsyncStorage from "@react-native-async-storage/async-storage";

const CachedImage = (props) => {
  const [cachedSource, setCachedSource] = useState(null);
  const { uri } = props;

  useEffect(() => {
    const getCachedImage = async () => {
      try {
        const cachedImage = await AsyncStorage.getItem(uri);
        if (cachedImage) {
          setCachedSource({ uri: cachedImage });
        } else {
          const response = await fetch(uri);
          const imageBlob = await response.blob();
          const base64Data = await new Promise((resolve) => {
            const reader = new FileReader();
            reader.readAsDataURL(imageBlob);
            reader.onloadend = () => {
              resolve(reader.result);
            };
          });
          await AsyncStorage.setItem(uri, base64Data);
          setCachedSource({ uri: base64Data });
        }
      } catch (error) {
        console.log("CACHED ERROR", error.message);
        setCachedSource({ uri });
      }
    };

    getCachedImage();
  }, []);
  return <Animated.Image source={cachedSource} {...props} />;
};

export default CachedImage;
