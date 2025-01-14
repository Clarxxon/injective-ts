import { Coin } from '@injectivelabs/ts-types'
import { MitoApi } from '@injectivelabs/mito-proto-ts'

export interface MitoHolders {
  holderAddress: string
  vaultAddress: string
  amount: string
  updatedAt: number
  lpAmountPercentage: number
  redemptionLockTime: string
}

export interface MitoPriceSnapshot {
  price: number
  updatedAt: number
}

export interface MitoChanges {
  allTimeChange: number
  threeMonthsChange?: number
  oneMonthChange?: number
  oneDayChange?: number
  oneWeekChange?: number
  oneYearChange?: number
  threeYearsChange?: number
  sixMonthsChange?: number
}

export interface MitoDenomBalance {
  denom: string
  totalBalance: string
}

export interface MitoSubaccountBalance {
  subaccountId: string
  balancesList: MitoDenomBalance[]
}

export interface MitoVault {
  contractAddress: string
  codeId: string
  vaultName: string
  marketId: string
  currentTvl: number
  profits?: MitoChanges
  tvlChanges?: MitoChanges
  updatedAt: number
  vaultType: string
  lpTokenPrice: number
  subaccountInfo?: MitoSubaccountBalance
  masterContractAddress: string
  totalLpAmount: string
  notionalValueCap: string
}

export interface MitoSubscription {
  vaultInfo?: MitoVault
  lpAmount: string
  holderAddress: string
  lpAmountPercentage: number
}

export interface MitoPagination {
  total: Number
}

export interface MitoPortfolio {
  totalValue: number
  pnl: number
  totalValueChartList: MitoPriceSnapshot[]
  pnlChartList: MitoPriceSnapshot[]
}

export interface MitoLeaderboardEntry {
  address: string
  pnl: number
}

export interface MitoLeaderboard {
  entriesList: MitoLeaderboardEntry[]
  snapshotBlock: string
  updatedAt: number
  epochId: number
}

export interface MitoLeaderboardEpoch {
  epochId: number
  startAt: number
  endAt: number
  isLive: boolean
}

export interface MitoTransfer {
  lpAmount: string
  coins: Coin[]
  usdValue: string
  isDeposit: boolean
  executedAt: number
  account: string
  vault: string
  txHash: string
  tidByVault: number
  tidByAccount: number
}

export type GrpcMitoVault = MitoApi.Vault
export type GrpcMitoChanges = MitoApi.Changes
export type GrpcMitoHolders = MitoApi.Holders
export type GrpcMitoPagination = MitoApi.Pagination
export type GrpcMitoDenomBalance = MitoApi.DenomBalance
export type GrpcMitoSubscription = MitoApi.Subscription
export type GrpcMitoPriceSnapshot = MitoApi.PriceSnapshot
export type GrpcMitoLeaderboardEntry = MitoApi.LeaderboardEntry
export type GrpcMitoLeaderboardEpoch = MitoApi.LeaderboardEpoch
export type GrpcMitoSubaccountBalance = MitoApi.SubaccountBalance
