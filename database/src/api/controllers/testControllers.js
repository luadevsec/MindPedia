const custonID = (req, res) => {
    const id = req.params.id;
    res.send(`Esta é uma resposta personalizada para o ID ${id}`);
}

export default { custonID };