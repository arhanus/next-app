export const authConfig = {
    pages:{
        signIn:"/login",
    },
    providers:[],
    
    callbacks:{
        async jwt({ token, user }){
            if(user){
                token.id = user.id
                token.isAdmin = user.isAdmin
            }
            return token
        },
        async session({ session, token }){
            if(token){
                session.user.id = token.id
                session.user.isAdmin = token.isAdmin
            }
            return session
        },
        authorized({ auth, request }){
           const user = auth?.user;
           const isOnAdminPage = request.nextUrl?.pathname.startsWith("/admin");
           const isOnBlogPage = request.nextUrl?.pathname.startsWith("/blog");
           const isOnLoginPage = request.nextUrl?.pathname.startsWith("/login");
        
           //ONLY ADMIN CAN REACH TO ADMIN PAGE
           if(!user?.isAdmin && isOnAdminPage){
               return false;
           
            }
            //ONLY AUTHENTICATED USERS CAN REACH TO BLOG PAGE
            else if(!user && isOnBlogPage){
               return false;
           
            }
            else if(user && isOnLoginPage){
               return Response.redirect(new URL("/", request.nextUrl));
           
            }else{
               return true;
           
            }
        
        }
    }
}