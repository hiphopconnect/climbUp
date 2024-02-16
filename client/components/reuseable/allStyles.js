import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  h1: {
    fontSize: 30,
    fontWeight: "bold",
  },

  h2: {
    fontSize: 24,
    fontWeight: "semibold",
  },

  h3: {
    fontSize: 19,
    fontWeight: "bold",
    marginBottom: 5,
  },

  text: {
    fontSize: 17,
    fontWeight: "medium",
  },

  numberbig: {
    fontSize: 50,
    fontWeight: "bold",

  },

  icon: {
  },

  image: {
    resizeMode: "auto",
  },

  head: {
    height: 200,
    justifyContent: "center",
  },

  textinput: {
    borderColor: "grey",
    borderWidth: 3,
    borderRadius: 18,
    padding: 8,
    marginBottom: 20,
  },

  borderBox: {
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    borderWidth: 4,
    borderRadius: 20,
    marginBottom: 20,
    padding: 10,
    paddingLeft: 20,
  },

  borderBoxExtended: {
    backgroundColor: "lightgrey",
    borderColor: "lightgrey",
    borderWidth: 4,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 10,
    paddingLeft: 20,

  },

  routeExtension: {
    backgroundColor: "lightgrey",
    borderBottomLeftRadius: 20,
    borderBottomRightRadius: 20,
    borderColor: "lightgrey",
    borderEndWidth: 4,
    borderStartWidth: 4,
    borderBottomWidth: 4,
    height: 200,
    marginBottom: 20,
  },

  buttonlarge: {
    backgroundColor: "lightgrey",
    paddingVertical: "2%",
    paddingHorizontal: "5%",
    marginVertical: 10,
    borderRadius: 12,
    justifyContent: "center",
  },

  buttonlargetext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",

  },

  buttonmedium:{
    height: 40,
    justifyContent: "center",
  },

  buttonmediumtext: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    padding: "2%",

  },

  buttonsmall: {
    marginBottom: "3%",
  },

  buttonsmalltext: {
    textDecorationLine: "underline",
    fontSize: 17,
    fontWeight: "bold",
    textAlign: "right",
    color: "grey",
  },

  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    marginTop: 22,
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 20,
    alignItems: "center",
    elevation: 5,
    height: 300,
  },
});

export default styles;
