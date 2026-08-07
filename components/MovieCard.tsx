import { Link } from "expo-router";
import { Image, Text, TouchableOpacity } from "react-native";

const MovieCard = ({ id, poster_path, title, vote_average, rate }: Movie) => {
  return (
    <Link href={`/movie/${id}`} asChild>
      <TouchableOpacity>
        <Image
          source={{
            uri: poster_path
              ? `https://image.tmdb.org/t/p/w500${poster_path}`
              : "http://placehold.co/600x400/1a1a1a/ffffff.png",
          }}
          className="w-full h-52 rounded-lg"
          resizeMode="cover"
        />
        <Text className="text-white text-sm font-bold mt-2">{title}</Text>
      </TouchableOpacity>
    </Link>
  );
};

export default MovieCard;
