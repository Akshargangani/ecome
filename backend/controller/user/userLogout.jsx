async function userLogoutController(req, res) {
    try {
        res.clearCookie('token').status(200).json({
            message: "Logged out successfully",
            success: true,
            error: false
        });
    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            error: true,
            success: false
        });
    }
}

module.exports = userLogoutController;