import React from "react";
import Link from "next/link";
import { projectContent } from "@/consts/projectContent";

class Test extends React.Component {
  static async getInitialProps({ query }) {
    return { query };
  }

  render() {
    return (
      <div>
        <pre>
          {JSON.stringify(projectContent[this.props.query.all])}
        </pre>
        <pre>
          {JSON.stringify(this.props.query, undefined, 2)}
        </pre>
      </div>
    );
  }
}

export default Test;