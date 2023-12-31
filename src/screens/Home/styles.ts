import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  container: {
    backgroundColor: "#131016",
    padding: 24,
    flex: 1
  },
  eventName: {
    color: "#FDFCFE",
    fontSize: 24,
    fontWeight: "bold",
    marginTop: 48
  },
  eventDate: {
    color: "#6B6B6B",
    fontSize: 16
  },
  input: {
    backgroundColor: "#1F1E25",
    height: 56,
    borderRadius: 5,
    color: "#FDFCFE",
    padding: 16,
    fontSize: 16,
    flex: 1,
    marginRight: 10
  },
  btnText: {
    color: "#FFF",
    fontSize: 16
  },
  button: {
    width: 56,
    height: 56,
    borderRadius: 5,
    backgroundColor: "#31CF67",
    alignItems: "center",
    justifyContent: "center"
  },
  form: {
    width: "100%",
    flexDirection: "row",
    marginTop: 36,
    marginBottom: 42
  },
  listEmptyText: {
    color: '#fff',
    fontSize: 14,
    textAlign: 'center'
  }
})