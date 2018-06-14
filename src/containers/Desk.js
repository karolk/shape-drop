import { connect } from "react-redux";
import Desk from "../components/Desk";

const mapStateToProps = state => ({
  shelves: Object.keys(state.desk).map(id => ({ id, items: state.desk[id] }))
});

export default connect(mapStateToProps)(Desk);
