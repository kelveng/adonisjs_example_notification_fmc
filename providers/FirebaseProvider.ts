import { ApplicationContract } from '@ioc:Adonis/Core/Application'
import FirebaseService from './firebaseService'

export default class FirebaseProvider {
  public static needsApplication = true

  constructor (protected app: ApplicationContract) {        
  }

  public register () {
    // Register your own bindings
    this.app.container.singleton('Adonis/service/Firebase',()=>{
        const {config} = this.app.container.use('Adonis/Core/Config')
        const {firebase} = config        
        return new FirebaseService(firebase)
    })
  }

  public async boot () {
    // All bindings are ready, feel free to use them
  }

  public async ready () {
    // App is ready
  }

  public async shutdown () {
    // Cleanup, since app is going down
  }
}
