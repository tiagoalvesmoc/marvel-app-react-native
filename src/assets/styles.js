import styled from "styled-components";
import color from "../assets/colors";

export const Spaccer = styled.View`
  width: 100%;
  height: ${(props) => props.size || "auto"};
`;

export const Container = styled.View`
  flex: 1;
`;

export const Box = styled.View`
  flex-direction: ${(props) => props.direction || "column"};
  justify-content: ${(props) => props.justify || "center"};
  width: ${(props) => props.width || "100%"};
  height: ${(props) => props.height || "auto"};

  padding: 10px;
  margin: ${(props) => props.margin || "0px"};

  z-index: 2;
  opacity: 5;
`;

export const Text = styled.Text`
  color: ${(props) => props.color || color.white};
  font-size: ${(props) => props.size || "12px"};
  margin-left: ${(props) => props.left || "0px"};
  font-family: "Questrial_400Regular";
`;

export const Title = styled.Text`
  color: ${(props) => props.color || color.white};
  font-size: ${(props) => props.size || "20px"};
  margin-left: ${(props) => props.left || "0px"};
  font-family: "Questrial_400Regular";
  font-weight: ${(props) => props.bold || "normal"};
`;

export const Icon = styled.Image`
  width: ${(props) => props.width || "20px"};
  height: ${(props) => props.height || "20px"};
  margin: ${(props) => props.spacer || "0px"};
`;

export const Image = styled.Image`
  width: ${(props) => props.width || "160px"};
  height: ${(props) => props.height || "280px"};
  margin-left: 3px;
  border-radius: 50px;
`;

export const Touchable = styled.TouchableOpacity`
  max-width: 160px;
  margin: 3px;
`;

export const CardListContainer = styled.View`
  flex: 1;
`;
export const BoxCardList = styled.View`
  width: 100%;
  align-items: flex-start;
  padding: 10px;
`;
