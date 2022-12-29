import React from "react"
import { useAccount, useContract, useProvider, useSigner } from "wagmi"
import SherlockABI from "../abi/Sherlock"
import { BigNumber } from "ethers"
import config from "../config"

/**
 * Address of Sherlock contract
 */
export const SHERLOCK_ADDRESS = config.sherlockAddress

/**
 * React Hook for interacting with Sherlock contract.
 *
 * See https://github.com/sherlock-protocol/sherlock-v2-core
 */
const useSherlock = () => {
  const [tvl, setTvl] = React.useState<BigNumber>()

  const provider = useProvider()
  const { data: signerData } = useSigner()
  const { address: connectedAddress } = useAccount()
  const contract = useContract({
    address: SHERLOCK_ADDRESS,
    signerOrProvider: signerData || provider,
    abi: SherlockABI,
  })

  /**
   * Fetch Sherlock's Total Value Locked
   */
  const refreshTvl = React.useCallback(async () => {
    const latestTvl = await contract?.totalTokenBalanceStakers()
    setTvl(latestTvl)
  }, [contract])

  /**
   * Stake USDC
   *
   * @param amount Amount of USDC staked
   * @param period Lock time
   */
  const stake = React.useCallback(
    async (amount: BigNumber, period: number) => {
      if (!connectedAddress) {
        return
      }

      return contract?.initialStake(amount, BigNumber.from(period), connectedAddress)
    },
    [connectedAddress, contract]
  )

  /**
   * Unsttake and cash out an unlocked position
   */
  const unstake = React.useCallback(
    async (id: BigNumber) => {
      return contract?.redeemNFT(id)
    },
    [contract]
  )

  /**
   * Unsttake and cash out an unlocked position
   */
  const restake = React.useCallback(
    async (id: BigNumber, period: number) => {
      return contract?.ownerRestake(id, BigNumber.from(period))
    },
    [contract]
  )

  /**
   * Fetch TVL on initialization
   */
  React.useEffect(() => {
    if (!contract || tvl) {
      return
    }

    refreshTvl()
  }, [contract, tvl, refreshTvl])

  return React.useMemo(
    () => ({
      address: SHERLOCK_ADDRESS,
      tvl,
      refreshTvl,
      stake,
      restake,
      unstake,
    }),
    [tvl, stake, refreshTvl, restake, unstake]
  )
}
export default useSherlock
