import {IProfessional} from '../../models/interface/ApplicationData.interface'
import userdata,{IProfessionalDataModel} from '../../models/application/ProfessionalData'

export default class ProfessionalServis{
    public async AddData(user_params:IProfessional): Promise<IProfessionalDataModel>{
        const _session = new userdata(user_params);
        return await _session.save();
    }
}
