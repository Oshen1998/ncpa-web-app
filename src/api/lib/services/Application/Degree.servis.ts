import {IDegree} from '../../models/interface/ApplicationData.interface'
import userdata,{IDegreeDataModel} from '../../models/application/Degree'

export default class DegreeServis{
    public async AddData(user_params:IDegree): Promise<IDegreeDataModel>{
        const _session = new userdata(user_params);
        return await _session.save();
    }
}
