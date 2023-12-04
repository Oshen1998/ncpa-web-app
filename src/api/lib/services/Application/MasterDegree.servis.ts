import {IMasterDegree} from '../../models/interface/ApplicationData.interface'
import userdata,{IMasterDegreeDataModel} from '../../models/application/MasterDegree'

export default class MasterDegreeServis{
    public async AddData(user_params:IMasterDegree): Promise<IMasterDegreeDataModel>{
        const _session = new userdata(user_params);
        return await _session.save();
    }
}
