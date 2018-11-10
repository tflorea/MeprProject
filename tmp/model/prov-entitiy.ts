import { ProvActivity } from "./prov-activity";
import { ProvAgent } from "./prov-agent";

export class ProvEntity {
    wasDerivedFrom: ProvEntity;
    wasGeneretedBy: ProvActivity;
    wasAttributedTo: ProvAgent;
}