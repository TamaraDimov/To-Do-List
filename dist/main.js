/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("// import { forEach } from 'lodash';\n// import './style.css';\n\nconst tasks = [\n  {\n    description: 'Take out the trash',\n    completed: false,\n    index: 1,\n  },\n  {\n    description: 'Wash the dishes',\n    completed: true,\n    index: 2,\n  },\n  {\n    description: 'Buy groceries',\n    completed: false,\n    index: 3,\n  },\n];\n\nconst taskList = () => {\n  let content = '';\n  tasks.forEach((task) => {\n    content += `\n    <ul  id=\"task-list\">\n        <li class=\"task-list\" id=\"toDo\"><input type=\"checkbox\" id=\"checkbox\"  value=\"task\">${task.description}</li>\n    </ul>\n\n    `;\n  });\n  return content;\n};\n\nconst rendering = () => document.getElementById('to-dos');\n\nwindow.addEventListener('load', () => {\n  const content = taskList();\n  rendering().innerHTML = content;\n});\n\n\n//# sourceURL=webpack://webpack/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;