# Code Challenge - Gutenberg sidebar
https://ffxblue.github.io/interview-tests/test/wordpress-sidebar/

### 1. Check it on live:
https://alexyin.co/challengegutenburgsidebar/wp-admin

username/password for wp_admin: `admin/admin`

Edit/Create a post, you'll see the **Advertising Settings** sidebar:

<p align="center"><img src="https://github.com/orochigalois/Code-Challenge-Gutenberg-Sidebar-WPENV/raw/master/screenshot/screenshot.png" alt="Code is Poetry." /></p>




### 2. Local environment is run via wp-env/Docker

#### Prerequisites:
1. **Docker** must be installed successfully on your local machine and make sure it is running
1. Node.js version > 13 (recommend using v14.7.0 via **nvm**)

#### Installation:

1. Clone this repository
2. Install Node dependencies

```
$ npm install
```

3. Start docker container
```
$ npm run wp-env start
```

4. Now you should be able to access your local site at: http://localhost:8888/
username/password for wp_admin: `admin/password`



5. Compile assets **typescript and scss** by running (Thanks to webpack & laravel-mix):
```
$ npm run watch
```

6. Stop docker containers by running:
```
$ npm run wp-env stop
```


#### Puppeteer E2E Tests：
All testcases have a '.spec.js' suffix under components folder.

To run the tests, please follow these steps:

1. Start wp-env first
```
$ npm run wp-env start
```

2. Open test environment in browser: http://localhost:8889/wp-admin

3. Activate 'Advertising Settings' plugin

4. Now can run testcases:

```
$ npm run tests
```
Updated all snapshots before running test:
```
$ npm run update-snap
```