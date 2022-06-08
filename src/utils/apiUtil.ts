export default class ApiUtil {
    static getHeader() {
        global.token = 'AAAAAAAAAAAAAAAAAAAAAPHadAEAAAAAEkkNoebE7ugzXnhuWIOyUI2QGCk%3DZWsdA2YjHiTlu7KMMal9SMkjBovg6CeUJbdoVUUq3KVREGeFOY'
        let header = {
            headers: {
                'Authorization': 'bearer ' + global.token,
            }
        }
        return header
    }
}