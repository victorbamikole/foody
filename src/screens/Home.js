import { View, Text, ScrollView, Image, TextInput } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { BellIcon, MagnifyingGlassIcon } from "react-native-heroicons/outline";
import Categories from "../components/categories";

const Home = () => {
  return (
    <View>
      <StatusBar style="dark" />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        className="space-y-6 pt-14"
      >
        {/* Avatar and bell icon */}
        <View className="mx-4 flex-row justify-between items-center mb-2">
          <Image
            source={require("../../assets/images/avatar.png")}
            style={{ height: hp(5), width: hp(5.5) }}
          />
          <BellIcon color="gray" size={hp(4)} />
        </View>

        {/* Greetings and punchline */}
        <View className="mx-4 space-y-2 mb-2">
          <Text style={{ fontSize: hp(1.7) }} className="text-neutral-600">
            Hello, Victor
          </Text>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Make Your Own Food
            </Text>
          </View>
          <View>
            <Text
              style={{ fontSize: hp(3.8) }}
              className="font-semibold text-neutral-600"
            >
              Stay at <Text className="text-amber-400">Home</Text>
            </Text>
          </View>

          {/* Greetings and punchline */}
        </View>
        <View className="mx-4 flex-row items-center rounded-full bg-black/5 p-[6px]">
          <TextInput
            placeholder="Search any recipe"
            placeholderTextColor={"gray"}
            style={{ fontSize: hp(1.7) }}
            className="flex-1 text-base mb-1 pl-3 tracking-wider"
          />

          <View className="bg-white rounded-full p-3">
            <MagnifyingGlassIcon
              size={hp(2.5)}
              strokeWidth={3}
              color={"gray"}
            />
          </View>
        </View>
        {/* Greetings and punchline */}
        <View>
          <Categories />
        </View>
      </ScrollView>
    </View>
  );
};

export default Home;
