import { useParams } from "react-router-dom";

function Links() {
  let param = useParams();
  let parseParam = parseInt(param.idAction);

  let linksData = [
    { id: 1, title: "react" },
    { id: 2, title: "bootstrap" },
    { id: 3, title: "node.js" },
    { id: 4, title: "mongoDB" },
    { id: 5, title: "jango" },
  ];

  console.log(param);

  return (
    <div>
      my link is at :{linksData.find((link) => link.id === parseParam).title}
    </div>
  );
}

export default Links;
