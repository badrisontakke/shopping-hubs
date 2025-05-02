
```





```ll be in this `render-deploy-backend` branch. So don't change your `.evn` from master branch.
5. You have to change your database to local to mongodb atlas. Because in this deployment we are not creating db server. So we will be using mongo atlas url. So find your mongodb cloud url with database which will look like this: `mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   and
   <b>goto the `render-deploy-backend` branch</b>
   and goto `.env` file and replace the first variable to your latest mongodb cloud url like this:
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   Don't just put this url. Your url will be different. You will find it in your mongo cluster setting.
   The old variable will be like this: `DATABASE=mongodb://127.0.0.1:27017/ecommerce
` and your new one should look like this:
   `DATABASE=mongodb+srv://myusername:myclusterpassword@mycluster.mongodb.net/ecommerce?retryWrites=true&w=majority`
   you can find the mongo url by goto the mongodb atlas website and goto your database and you can find a connect button and click on that you will see the url. And modify the url quite like my one with your secret info.
   N.B: And you must need to provide the cluster password not your account password! So find your cluster password from database access menu in mongodb atlast cloud and change accoding to you. Here I provide all image's that you can undarstand better
   
6. Then come to render website. Give all of the imformations I set in the image below just change the name of your project and then must be change the branch name to `master` to `render-deploy-backend`

7. This is the setup for render
 

8. After all the setup you finished create the web service and It will deploy the project.

You can deploy frontend into vercel or netlify also. Thanks

`Build with 💛 by badri`
