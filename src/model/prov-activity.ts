import { ProvAgent } from "./prov-agent";
import { ProvEntity } from "./prov-entitiy";

export class ProvActivity {
    wasInformedBy: ProvActivity;
    wasAssociatedWith: ProvAgent;
    used: ProvEntity;
}