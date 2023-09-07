/**
 * Configure your bot instance.
 * See our [API Documentation]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/configuration} for available configuration options and values.
 */
export function configureBot(rg) {
    rg.characterConfig = {
        speed: 4000
    };
}

/**
 * Implement your code here to define a [PlayTest Bot]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/playtest-bots}.
 * This method is invoked once each time your Unity integration collects updated state information for your GameObjects.
 * Add your code here to make dynamic decisions based on the current game state.
 * 
 * Note: processTick and startScenario are mutually exclusive
 * 
 * @param rg Exposes the [Regression Games API]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/configuration} which contains methods for evaluating the game state and queueing behaviors that you've defined as `RGActions`.
 */
export async function processTick(rg) {

    let powerUps = rg.findEntities("PowerUp")
    if (powerUps) {
        rg.performAction("MoveToPosition", powerUps[0].position)
    }
}

/**
 * Implement your code here to define a [Validation Bot]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/validation-bots}.
 * This method is invoked once and runs to completion. The scenario will fail if any assertion fails.
 * Add your code here to perform step-by-step actions and validate their effects on other GameObjects the game state.
 *
 * Note: processTick and startScenario are mutually exclusive
 *  
 * @param rg Exposes the [Regression Games API]{@link https://docs.regression.gg/studios/unity/unity-sdk/creating-bots/configuration} which contains methods for evaluating the game state and queueing behaviors that you've defined as `RGActions`.
 */
// export async function startScenario(rg) {

// }