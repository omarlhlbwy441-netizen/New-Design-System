
import { AgencyEmpire } from './agency_registry.js';
import { UnifiedSystem } from './unified_core.js';

export const SyncControl = {
    checkAgencyLiquidity: (agencyId) => {
        const agency = AgencyEmpire.shipping[agencyId] || AgencyEmpire.talents[agencyId];
        return agency ? agency.balance : 0;
    },
    verifyCreatorStatus: (creatorId) => {
        console.log(`🛡️ فحص صلاحية المذيع: ${creatorId}`);
    }
};
