export default (req, res, next) => {
    //res.json({ message: "Hola API en mantenimiento" });
    console.log(req.method);
    next();
}