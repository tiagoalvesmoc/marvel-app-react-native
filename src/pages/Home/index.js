import React, { useEffect, useState } from "react";
import { StatusBar } from "expo-status-bar";
import { ScrollView, ActivityIndicator } from "react-native";
import { Container, Text, Title, Spaccer } from "../../assets/styles";
import Header from "../../components/Header";
import CardHeroes from "../../components/CardHeroes";
import md5 from "md5";
import axios from "axios";
import color from "../../assets/colors";
const baseUrl = "http://gateway.marvel.com/v1/public/comics?";

const publickey = "f231a167cd0d522d6b22e2ea076784df";
const privateKey = "1f744fe525aa09cf306bebfd56d8c37d0b9450e7";
const timeNow = Number(new Date());

const hash = md5(timeNow + privateKey + publickey);

export default function Home() {
  const [comicsData, setComicsData] = useState([]);
  const [eventsData, setEventsData] = useState([]);
  const [charactersData, setCharactersData] = useState([]);
  const [loading, setLoading] = useState(false);

  //   EVENTS
  useEffect(() => {
    async function getData() {
      setLoading(true);
      await axios
        .get(
          `http://gateway.marvel.com/v1/public/events?ts=${timeNow}&apikey=${publickey}&hash=${hash}`
        )
        .then(async (res) => {
          setEventsData(res.data.data.results.reverse());
          setEventsData((old) => [...old].sort());

          //   console.log("Comics -", res.data.data.results[0].thumbnail);
          setLoading(false);
        })
        .catch((err) => {
          console.log("RESPONSE - ", err);
          setLoading(false);
        });
    }

    getData();
    eventsData.reverse();
  }, []);

  //   COMICS
  useEffect(() => {
    async function getData() {
      setLoading(true);
      await axios
        .get(
          `http://gateway.marvel.com/v1/public/comics?ts=${timeNow}&apikey=${publickey}&hash=${hash}`
        )
        .then(async (res) => {
          setComicsData(res.data.data.results);
          setComicsData((old) => [...old].sort());

          //   console.log("Comics -", res.data.data.results[0].thumbnail);
          setLoading(false);
        })
        .catch((err) => {
          console.log("RESPONSE - ", err);
          setLoading(false);
        });
    }

    getData();
    comicsData.reverse();
  }, []);
  //   SERIES
  useEffect(() => {
    async function getData() {
      setLoading(true);
      await axios
        .get(
          `http://gateway.marvel.com/v1/public/series?ts=${timeNow}&apikey=${publickey}&hash=${hash}`
        )
        .then(async (res) => {
          setCharactersData(res.data.data.results.reverse());
          setCharactersData((old) => [...old].sort());

          //   console.log("Comics -", res.data.data.results[0].thumbnail);
          setLoading(false);
        })
        .catch((err) => {
          console.log("RESPONSE - ", err);
          setLoading(false);
        });
    }

    getData();
    charactersData.reverse();
  }, []);

  return (
    <Container>
      <Spaccer size="30px" />
      <Header />
      {loading ? (
        <ActivityIndicator size="large" color="#000" />
      ) : (
        <ScrollView>
          <Text color={color.red} size="20px" left="10px">
            Herois
          </Text>
          <CardHeroes data={comicsData} />

          <CardHeroes data={eventsData} />
          <CardHeroes data={charactersData} />
        </ScrollView>
      )}

      <Spaccer size="30px" />
      <StatusBar style="light" />
    </Container>
  );
}
