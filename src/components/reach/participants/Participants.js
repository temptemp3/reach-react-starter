/* Participant Factory */
import ParticipantFactory from "./ParticipantFactory";

/* Participant Interfaces */
import aliceInterface from "../participants/interfaces/interfaceAlice";
import bobInterface from "../participants/interfaces/interfaceBob";

/* Views */
import AliceViews from "../participants/views/AliceViews";
import BobViews from "../participants/views/BobViews";

const Backend = require("../build/index.main.mjs");

export const Alice = ParticipantFactory({
    setInterface: aliceInterface,
    Views: AliceViews,
    setBackend: Backend.Alice,
});

export const Bob = ParticipantFactory({
    setInterface: bobInterface,
    Views: BobViews,
    setBackend: Backend.Bob,
});
