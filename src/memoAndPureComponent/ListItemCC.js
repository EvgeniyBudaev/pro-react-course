import React from "react";

export class ListItemCC extends React.PureComponent {
  render() {
    console.log("ListItemCC render");
    const { item } = this.props;

    return <li className="ListItem">{`${item.name} - ${item.payment}rub`}</li>;
  }
}
