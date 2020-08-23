// Filename: api-routes.js
// Initialize express router
import router from 'express';
// Set default API response
router.Router().get('/api', function (req, res) {
    res.json({
        status: 'API Its Working',
        message: 'Welcome to RESTHub crafted with love!'
    });
});
export const apiRouter = router;