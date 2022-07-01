import Repository from './repository'

const resource = '/members'

export default {
  getAllMembers () {
    return Repository.get(`${resource}?part=snippet,twitter`)
  },
  getMember(id){
    return Repository.get(`${resource}?part=snippet,twitter&id=`+id)
  }
}
