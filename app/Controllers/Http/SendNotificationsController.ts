import { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import FirebaseProvider from '@ioc:Adonis/service/Firebase'


export default class SendNotificationsController {
    /**
     * post
     */
    public async store({request,response}:HttpContextContract) {
        const {topic,title,body} = request.post()
        
        try{
            const payload ={
                notification:{
                    title:title,
                    body:body
                },
                data:{
                    click_action:"FLUTTER_NOTIFICATION_CLICK"
                }
            }
            await FirebaseProvider.messaging().sendToTopic(topic,payload);
            response.status(200).json({message:"Enviado com sucesso"})    
        }catch(error){
            response.status(500).json({message:error})    
        }

    }
}
