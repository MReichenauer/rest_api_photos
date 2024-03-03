This REST API project is made with TypeScript, Node.js, Express, Prisma, Express-validator, and bcrypt.

To use this repository, you need to run 'npm install' in the terminal to install the dependencies and run a localhost (port 3000) (e.g., with MAMP). Then, import the SQL dump into your SQL database.

All the routes are listed below. For example, you can use Postman to try them out.

/**
 * Register a user /register
 */
router.post("/register", createUserRules, registerUser);

/**
 * Get a users profile /profile
 */
router.get("/profile", basicAuthMiddleware, getProfile);

/**
 * Create a photo /photos
 */
router.post("/photos", basicAuthMiddleware, createPhotoRules, createPhotoHandler);

/**
 * Get all of a users photos /photos
 */
router.get("/photos", basicAuthMiddleware, getUserPhotosHandler);

/**
 * Get a single photo of a user /photos/:photoId
 */
router.get("/photos/:photoId", basicAuthMiddleware, getOnePhotoHandler);

/**
 * Update a single photo of a user /photos/:photoId
 */
router.patch("/photos/:photoId", basicAuthMiddleware, updatePhotoRules, updatePhotoHandler);

/**
 * Create a album /albums
 */
router.post("/albums", basicAuthMiddleware, createAlbumRules, createAlbumHandler);

/**
 * Get all of a users albums /albums
 */
router.get("/albums", basicAuthMiddleware, getUserAlbumsHandler);

/**
 * Get a single album of a user /albums/:albumId
 */
router.get("/albums/:albumId", basicAuthMiddleware, getOneAlbumHandler);

/**
 * Update a single album of a user /albums/:albumId
 */
router.patch("/albums/:albumId", basicAuthMiddleware, updateAlbumRules, updateAlbumHandler);

/**
 * Add a single photo to an album of a user /albums/:albumId/photos
 */
router.post("/albums/:albumId/photos", basicAuthMiddleware, addPhotoToAlbumHandler);

