const controllers = {}
var sequelize = require('../model/database');
var Content = require('../model/Content');

sequelize.sync()

controllers.delete = async (req,res) => {
  const { titleid } = req.params;
  const del = await Content.destroy({
    where: { titleid: titleid }
  })
  res.json({success:true, deleted:del, message:"Deleted successful"});

}

controllers.put = async (req, res) => {
  const { titleid } = req.params;
  const { title, content, metakey, metacontent } = req.body;
  const data = await Content.update({
    title: title,
    content:content,
    metakey:metakey,
    metacontent:metacontent
  },{
    where: { titleid: titleid}
  })
  .then( function (data){
      console.log("mydata", data);
    return data;
  })
  .catch(error => {
    return error;
  })

  res.json({ success:true, data: data, message: "Updated successful"});

}

controllers.get = async (req, res) => {
  const { titleid } = req.params;
  const data = await Content.findAll({
    where: { titleid: titleid}
  })
  .then( function(data){
    return data;
  })
  .catch(error => {
    return error;
  })
  res.json({success:true, data:data});
}

controllers.list = async (req,res) => {
  console.log("req..........", req)
console.log("req..........", req.body)
  res.json({ success: true, data:req.body });
}

controllers.createcontent = async (req,res) => {
    console.log("Example Data", req.body.title);
  const { title, content, metakey, metacontent } = req.body;
  const data = await Content.create({
    title:title,
    content:content,
    metakey:metakey,
    metacontent:metacontent
  })
  .then(function(data){
    return data;
  })
  .catch(error=>{
    console.log(error)
    return error;
  })
  res.status(200).json({
    success:true,
    message:"Content Created",
    data:data
  })

}

module.exports = controllers;
