# Carrot Market Clon API Server

It's an API Server cloned carrot market using express module.
I'm making carrot marcket WAS for learnig node.js, so there will be wrong codes.

### Rest API

This API server was tried to be built restful.

### Folder Stucture

-   `src`: main logic
    `src` is a folder that has folders following domain like User, Post ...
-   `config`: extra files
    `config` has files that are required to `src`
-   `src` structure

    > Route - Controller - Provider/Service - Dao

-   Rout: Routing requests.
-   Controller: sends response.
-   Provider/Service: logic of application
-   Dao: Data Access Object.

```
├── config                              #
│   ├── baseResponseStatus.js           # response status
│   ├── database.js                     # setting database
│   ├── express.js                      # setting express framework
│   ├── jwtMiddleware.js                # jwt middle ware
│   ├── secret.js                       # keys
│   ├── winston.js                      # setting logger library
├── log                                 # all logs
├── node_modules                    	# 외부 라이브러리 폴더 (package.json 의 dependencies)
├── src                     			#
│   ├── app              				# apps
│ 	│   ├── User            			# a folder about User domain
│   │ 	│   ├── userDao.js          	# deal with query related User
│ 	│ 	│   ├── userController.js 		# deal with req and res
│ 	│ 	│   ├── userProvider.js   		# logics about R of CRUD
│ 	│ 	│   ├── userService.js   		# logics about CUD of CRUD
├── .gitignore                     		#
├── index.js                            # starting file
├── package-lock.json              	    #
├── package.json                        # 프로그램 이름, 버전, 필요한 모듈 등 노드 프로그램의 정보를 기술
└── README.md
```
