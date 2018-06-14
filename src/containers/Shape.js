import { connect } from "react-redux";
import Shape from "../components/Shape";
import deskActions from "../actions/desk";

export default connect(
  null,
  deskActions
)(Shape);
