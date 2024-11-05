const getMission = async (req, res) => {
    try {
        res.status(200).render("mission.pug")
    }
    catch (error) {
        console.log(`ERROR: ${error.stack}`);
        res.status(400).json({msj:`ERROR: ${error.stack}`});
    }
}

module.exports = {
    getMission
}