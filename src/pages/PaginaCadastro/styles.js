import { styled } from "@mui/system";

export const PageContainer = styled("div")({
 display: "flex",
 flexDirection: "column",
 alignItems: "center",
 padding: "3rem 5rem 10rem",
 background: "#D8E3D2"
});

export const PageTitle = styled("h1")({
 marginBottom: "2rem"
});

export const FormComponent = styled("form")({
 display: "flex",
 flexDirection: "column",
 gap: "1rem",
 minWidth: "50vw"
});

export const InputWrapper = styled("div")({
 display: "flex",
 flexDirection: "column",
 width: "100%",

 "& > label": {
  paddingBottom: "0.5rem",
  fontSize: "1rem",
  color: "#304050"
 },

 "& > input, & > select": {
  padding: "0.5rem",
  backgroundColor: "#D8E3D2",
  border: "1px solid #AEB3B7",
  borderRadius: "0.25rem",
  color: "#252525",
  fontSize: "1rem"
 }
});

export const DoubleInput = styled("div")({
 display: "flex",
 flexDirection: "row",
 gap: "1rem"
});

export const ButtonsWrapper = styled("div")({
 display: "flex",
 flexDirection: "row",
 gap: "1rem"
});
