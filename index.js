import express from "express";

const app = express()

app.use(express.static("public"))

app.get("/api/data", (req, res)=>{
  return res.json([
      {displayName: "Java", version:"1.08"},
      {displayName: "CSharp", version:"1.08"},
      {displayName: "Node.js", version:"1.08"},
  ])
})

app.listen(3000, ()=>{
  console.log(`listening on port ${3000}`)
})
