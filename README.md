This REST API project is made with TypeScript, Node.js, Express, Prisma, Express-validator, and bcrypt.

To use this repository, you need to run 'npm install' in the terminal to install the dependencies and run a localhost (port 3000) (e.g., with MAMP). Then, import the SQL dump into your SQL database.

All the routes are listed below. For example, you can use Postman to try them out.

/**
 * Register a user /register
 */
router.post("/register")

/**
 * Get a users profile /profile
 */
router.get("/profile")

/**
 * Create a photo /photos
 */
router.post("/photos")

/**
 * Get all of a users photos /photos
 */
router.get("/photos")

/**
 * Get a single photo of a user /photos/:photoId
 */
router.get("/photos/:photoId")

/**
 * Update a single photo of a user /photos/:photoId
 */
router.patch("/photos/:photoId")

/**
 * Create a album /albums
 */
router.post("/albums")

/**
 * Get all of a users albums /albums
 */
router.get("/albums")

/**
 * Get a single album of a user /albums/:albumId
 */
router.get("/albums/:albumId")

/**
 * Update a single album of a user /albums/:albumId
 */
router.patch("/albums/:albumId")

/**
 * Add a single photo to an album of a user /albums/:albumId/photos
 */
router.post("/albums/:albumId/photos")

