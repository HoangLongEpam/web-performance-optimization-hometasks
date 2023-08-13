# Identify target browser hometask

## Task description
The main goal of the task is to make changes in 2 webpack projects and compare the sizes of the resulting js files. 
In the first project you need to:
* connect babel
* configure the browserlist according to the condition. 

In the second, you need to:
* configure a separate assembly for old and modern browsers based on the esmodules in babel.

Structure of the task should be:

```
<task folder>
\---part-1
|   \---index.html
|   \---index.js
|   \---package.json
|   \---webpack.config.js
|   +---.babelrc
|   \---...
\---part-2
|   \---index.html
|   \---index.js
|   \---package.json
|   \---webpack.config.js
|   +---.babelrc
|   \---...
+---Comparative Report
```

## Evaluation criteria
For every day of lateness there is a penalty in 0.5 point. Maximum 10 points. 

1. In first project setup webpack to work with babel. Create .babelrc file and configure babel to support last 2
   versions of browsers, not dead browsers and browsers with usability more then 5%. **[4 points]**
2. In second project use ES modules with Babel in order to create two different js files, one of which will be less weight
   and load in modern browsers, and the second will be larger. Provide support for older browsers **[3 points]**
3. Compare 3 js file sizes from both projects and attach small comparative report in hometask **[3 points]**
