import {
  Card,
  Flex,
  WrapItem,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@chakra-ui/react";
import axios from "axios";
import { useEffect, useState } from "react";

interface CatImage {
  id: string;
  url: string;
}

const CatImages = () => {
  const [catImages, setCatImages] = useState<CatImage[]>([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const fetchCatImages = async () => {
      try {
        const response = await axios.get("http://localhost:3001/api/cats");
        setCatImages(response.data);
        setIsClicked(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchCatImages();
  }, [isClicked]);

  return (
    <Card
      className="card"
      direction={{ base: "column", sm: "row" }}
      overflow="hidden"
      variant="outline"
    >
      <Flex className="catImage" wrap="wrap">
        {catImages.map((image) => (
          <WrapItem className="boxBorder" key={image.id}>
            <CardBody>
              <Image
                src={image.url}
                alt="Cat"
                borderRadius="lg"
                objectFit="cover"
                width="200px"
                height="200px"
                maxW={{ base: "100%", sm: "200px" }}
              />
            </CardBody>
            <Flex className="changeButton">
              <CardFooter>
                <Button
                  onClick={() => setIsClicked(true)}
                  variant="solid"
                  colorScheme="blue"
                >
                  Change
                </Button>
              </CardFooter>
            </Flex>
          </WrapItem>
        ))}
      </Flex>
    </Card>
  );
};

export default CatImages;
