/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
} from "ethers";
import {
  Contract,
  ContractTransaction,
  Overrides,
  PayableOverrides,
  CallOverrides,
} from "@ethersproject/contracts";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";

interface DecentraCoreInterface extends ethers.utils.Interface {
  functions: {
    "burners(address)": FunctionFragment;
    "dScore()": FunctionFragment;
    "dScoreMod(address)": FunctionFragment;
    "dd()": FunctionFragment;
    "ds()": FunctionFragment;
    "freezeFrame(address)": FunctionFragment;
    "freezeMember(address)": FunctionFragment;
    "frozenAccounts(address)": FunctionFragment;
    "getProposal(uint256)": FunctionFragment;
    "minters(address)": FunctionFragment;
    "newProposal(address,string,bytes)": FunctionFragment;
    "owner()": FunctionFragment;
    "proposalID()": FunctionFragment;
    "proposalTime()": FunctionFragment;
    "proposals(uint256)": FunctionFragment;
    "proxyBurnDD(address,uint256)": FunctionFragment;
    "proxyBurnDS(address,uint256)": FunctionFragment;
    "proxyMintDD(address,uint256)": FunctionFragment;
    "proxyMintDS(address,uint256)": FunctionFragment;
    "quorum()": FunctionFragment;
    "renounceOwnership()": FunctionFragment;
    "setApprovedContract(address,uint256)": FunctionFragment;
    "setQuorum(uint256)": FunctionFragment;
    "transferOwnership(address)": FunctionFragment;
    "transferxDAI(address,uint256)": FunctionFragment;
    "vote(uint256,bool)": FunctionFragment;
  };

  encodeFunctionData(functionFragment: "burners", values: [string]): string;
  encodeFunctionData(functionFragment: "dScore", values?: undefined): string;
  encodeFunctionData(functionFragment: "dScoreMod", values: [string]): string;
  encodeFunctionData(functionFragment: "dd", values?: undefined): string;
  encodeFunctionData(functionFragment: "ds", values?: undefined): string;
  encodeFunctionData(functionFragment: "freezeFrame", values: [string]): string;
  encodeFunctionData(
    functionFragment: "freezeMember",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "frozenAccounts",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "getProposal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "minters", values: [string]): string;
  encodeFunctionData(
    functionFragment: "newProposal",
    values: [string, string, BytesLike]
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "proposalID",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposalTime",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "proposals",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyBurnDD",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyBurnDS",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyMintDD",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "proxyMintDS",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "quorum", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "renounceOwnership",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "setApprovedContract",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "setQuorum",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "transferOwnership",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferxDAI",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "vote",
    values: [BigNumberish, boolean]
  ): string;

  decodeFunctionResult(functionFragment: "burners", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dScore", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dScoreMod", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "dd", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "ds", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "freezeFrame",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "freezeMember",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "frozenAccounts",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "minters", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "newProposal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "proposalID", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proposalTime",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "proposals", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "proxyBurnDD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyBurnDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyMintDD",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "proxyMintDS",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "quorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "renounceOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setApprovedContract",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "setQuorum", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "transferOwnership",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferxDAI",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "vote", data: BytesLike): Result;

  events: {
    "FunctionCallDelegated(address,bytes)": EventFragment;
    "NewProposal(uint256,uint256,address,bytes)": EventFragment;
    "NewVote(uint256,address,bool)": EventFragment;
    "OwnershipTransferred(address,address)": EventFragment;
    "ProposalApproved(uint256,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "FunctionCallDelegated"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewProposal"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "NewVote"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "OwnershipTransferred"): EventFragment;
  getEvent(nameOrSignatureOrTopic: "ProposalApproved"): EventFragment;
}

export class DecentraCore extends Contract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  on(event: EventFilter | string, listener: Listener): this;
  once(event: EventFilter | string, listener: Listener): this;
  addListener(eventName: EventFilter | string, listener: Listener): this;
  removeAllListeners(eventName: EventFilter | string): this;
  removeListener(eventName: any, listener: Listener): this;

  interface: DecentraCoreInterface;

  functions: {
    burners(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "burners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    dScore(overrides?: CallOverrides): Promise<[string]>;

    "dScore()"(overrides?: CallOverrides): Promise<[string]>;

    dScoreMod(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "dScoreMod(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    dd(overrides?: CallOverrides): Promise<[string]>;

    "dd()"(overrides?: CallOverrides): Promise<[string]>;

    ds(overrides?: CallOverrides): Promise<[string]>;

    "ds()"(overrides?: CallOverrides): Promise<[string]>;

    freezeFrame(arg0: string, overrides?: CallOverrides): Promise<[BigNumber]>;

    "freezeFrame(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[BigNumber]>;

    freezeMember(
      _member: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "freezeMember(address)"(
      _member: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "frozenAccounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        voteWeights: BigNumber;
        voteID: BigNumber;
        timeCreated: BigNumber;
        executed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    "getProposal(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        voteWeights: BigNumber;
        voteID: BigNumber;
        timeCreated: BigNumber;
        executed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    minters(arg0: string, overrides?: CallOverrides): Promise<[boolean]>;

    "minters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<[boolean]>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    "newProposal(address,string,bytes)"(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<ContractTransaction>;

    owner(overrides?: CallOverrides): Promise<[string]>;

    "owner()"(overrides?: CallOverrides): Promise<[string]>;

    proposalID(overrides?: CallOverrides): Promise<[BigNumber]>;

    "proposalID()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposalTime(overrides?: CallOverrides): Promise<[BigNumber]>;

    "proposalTime()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        timeCreated: BigNumber;
        voteWeights: BigNumber;
        voteID: BigNumber;
        executed: boolean;
        proposalPassed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        timeCreated: BigNumber;
        voteWeights: BigNumber;
        voteID: BigNumber;
        executed: boolean;
        proposalPassed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proxyBurnDD(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proxyBurnDS(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proxyMintDD(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "proxyMintDS(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    quorum(overrides?: CallOverrides): Promise<[BigNumber]>;

    "quorum()"(overrides?: CallOverrides): Promise<[BigNumber]>;

    renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setApprovedContract(address,uint256)"(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    setQuorum(
      _quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "setQuorum(uint256)"(
      _quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "transferxDAI(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;

    "vote(uint256,bool)"(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides
    ): Promise<ContractTransaction>;
  };

  burners(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "burners(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  dScore(overrides?: CallOverrides): Promise<string>;

  "dScore()"(overrides?: CallOverrides): Promise<string>;

  dScoreMod(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "dScoreMod(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  dd(overrides?: CallOverrides): Promise<string>;

  "dd()"(overrides?: CallOverrides): Promise<string>;

  ds(overrides?: CallOverrides): Promise<string>;

  "ds()"(overrides?: CallOverrides): Promise<string>;

  freezeFrame(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

  "freezeFrame(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<BigNumber>;

  freezeMember(
    _member: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "freezeMember(address)"(
    _member: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "frozenAccounts(address)"(
    arg0: string,
    overrides?: CallOverrides
  ): Promise<boolean>;

  getProposal(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      string,
      string
    ] & {
      maker: string;
      target: string;
      voteWeights: BigNumber;
      voteID: BigNumber;
      timeCreated: BigNumber;
      executed: boolean;
      proposalHash: string;
      call_data: string;
    }
  >;

  "getProposal(uint256)"(
    _id: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      string,
      string
    ] & {
      maker: string;
      target: string;
      voteWeights: BigNumber;
      voteID: BigNumber;
      timeCreated: BigNumber;
      executed: boolean;
      proposalHash: string;
      call_data: string;
    }
  >;

  minters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  "minters(address)"(arg0: string, overrides?: CallOverrides): Promise<boolean>;

  newProposal(
    _target: string,
    _proposalHash: string,
    _calldata: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  "newProposal(address,string,bytes)"(
    _target: string,
    _proposalHash: string,
    _calldata: BytesLike,
    overrides?: PayableOverrides
  ): Promise<ContractTransaction>;

  owner(overrides?: CallOverrides): Promise<string>;

  "owner()"(overrides?: CallOverrides): Promise<string>;

  proposalID(overrides?: CallOverrides): Promise<BigNumber>;

  "proposalID()"(overrides?: CallOverrides): Promise<BigNumber>;

  proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

  "proposalTime()"(overrides?: CallOverrides): Promise<BigNumber>;

  proposals(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      string,
      string
    ] & {
      maker: string;
      target: string;
      timeCreated: BigNumber;
      voteWeights: BigNumber;
      voteID: BigNumber;
      executed: boolean;
      proposalPassed: boolean;
      proposalHash: string;
      call_data: string;
    }
  >;

  "proposals(uint256)"(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [
      string,
      string,
      BigNumber,
      BigNumber,
      BigNumber,
      boolean,
      boolean,
      string,
      string
    ] & {
      maker: string;
      target: string;
      timeCreated: BigNumber;
      voteWeights: BigNumber;
      voteID: BigNumber;
      executed: boolean;
      proposalPassed: boolean;
      proposalHash: string;
      call_data: string;
    }
  >;

  proxyBurnDD(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proxyBurnDD(address,uint256)"(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  proxyBurnDS(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proxyBurnDS(address,uint256)"(
    _from: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  proxyMintDD(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proxyMintDD(address,uint256)"(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  proxyMintDS(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "proxyMintDS(address,uint256)"(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  quorum(overrides?: CallOverrides): Promise<BigNumber>;

  "quorum()"(overrides?: CallOverrides): Promise<BigNumber>;

  renounceOwnership(overrides?: Overrides): Promise<ContractTransaction>;

  "renounceOwnership()"(overrides?: Overrides): Promise<ContractTransaction>;

  setApprovedContract(
    _contract: string,
    _privledge: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setApprovedContract(address,uint256)"(
    _contract: string,
    _privledge: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  setQuorum(
    _quorum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "setQuorum(uint256)"(
    _quorum: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferOwnership(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferOwnership(address)"(
    newOwner: string,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  transferxDAI(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "transferxDAI(address,uint256)"(
    _to: string,
    _amount: BigNumberish,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  vote(
    _ProposalID: BigNumberish,
    supportsProposal: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  "vote(uint256,bool)"(
    _ProposalID: BigNumberish,
    supportsProposal: boolean,
    overrides?: Overrides
  ): Promise<ContractTransaction>;

  callStatic: {
    burners(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "burners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    dScore(overrides?: CallOverrides): Promise<string>;

    "dScore()"(overrides?: CallOverrides): Promise<string>;

    dScoreMod(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "dScoreMod(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    dd(overrides?: CallOverrides): Promise<string>;

    "dd()"(overrides?: CallOverrides): Promise<string>;

    ds(overrides?: CallOverrides): Promise<string>;

    "ds()"(overrides?: CallOverrides): Promise<string>;

    freezeFrame(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "freezeFrame(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    freezeMember(_member: string, overrides?: CallOverrides): Promise<void>;

    "freezeMember(address)"(
      _member: string,
      overrides?: CallOverrides
    ): Promise<void>;

    frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "frozenAccounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        voteWeights: BigNumber;
        voteID: BigNumber;
        timeCreated: BigNumber;
        executed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    "getProposal(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        voteWeights: BigNumber;
        voteID: BigNumber;
        timeCreated: BigNumber;
        executed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    minters(arg0: string, overrides?: CallOverrides): Promise<boolean>;

    "minters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<boolean>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "newProposal(address,string,bytes)"(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<string>;

    "owner()"(overrides?: CallOverrides): Promise<string>;

    proposalID(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalID()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        timeCreated: BigNumber;
        voteWeights: BigNumber;
        voteID: BigNumber;
        executed: boolean;
        proposalPassed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [
        string,
        string,
        BigNumber,
        BigNumber,
        BigNumber,
        boolean,
        boolean,
        string,
        string
      ] & {
        maker: string;
        target: string;
        timeCreated: BigNumber;
        voteWeights: BigNumber;
        voteID: BigNumber;
        executed: boolean;
        proposalPassed: boolean;
        proposalHash: string;
        call_data: string;
      }
    >;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "proxyBurnDD(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "proxyBurnDS(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "proxyMintDD(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "proxyMintDS(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    quorum(overrides?: CallOverrides): Promise<BigNumber>;

    "quorum()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: CallOverrides): Promise<void>;

    "renounceOwnership()"(overrides?: CallOverrides): Promise<void>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "setApprovedContract(address,uint256)"(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    setQuorum(_quorum: BigNumberish, overrides?: CallOverrides): Promise<void>;

    "setQuorum(uint256)"(
      _quorum: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    transferOwnership(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    "transferxDAI(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: CallOverrides
    ): Promise<void>;

    "vote(uint256,bool)"(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {
    FunctionCallDelegated(target: null, call_data: null): EventFilter;

    NewProposal(
      proposalId: null,
      proposalAmount: null,
      target: null,
      call_data: null
    ): EventFilter;

    NewVote(proposalId: null, voter: null, vote: null): EventFilter;

    OwnershipTransferred(
      previousOwner: string | null,
      newOwner: string | null
    ): EventFilter;

    ProposalApproved(proposalId: null, success: null): EventFilter;
  };

  estimateGas: {
    burners(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "burners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dScore(overrides?: CallOverrides): Promise<BigNumber>;

    "dScore()"(overrides?: CallOverrides): Promise<BigNumber>;

    dScoreMod(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "dScoreMod(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    dd(overrides?: CallOverrides): Promise<BigNumber>;

    "dd()"(overrides?: CallOverrides): Promise<BigNumber>;

    ds(overrides?: CallOverrides): Promise<BigNumber>;

    "ds()"(overrides?: CallOverrides): Promise<BigNumber>;

    freezeFrame(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "freezeFrame(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    freezeMember(_member: string, overrides?: Overrides): Promise<BigNumber>;

    "freezeMember(address)"(
      _member: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    frozenAccounts(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "frozenAccounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "getProposal(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    minters(arg0: string, overrides?: CallOverrides): Promise<BigNumber>;

    "minters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    "newProposal(address,string,bytes)"(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<BigNumber>;

    owner(overrides?: CallOverrides): Promise<BigNumber>;

    "owner()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposalID(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalID()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposalTime(overrides?: CallOverrides): Promise<BigNumber>;

    "proposalTime()"(overrides?: CallOverrides): Promise<BigNumber>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<BigNumber>;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proxyBurnDD(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proxyBurnDS(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proxyMintDD(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "proxyMintDS(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    quorum(overrides?: CallOverrides): Promise<BigNumber>;

    "quorum()"(overrides?: CallOverrides): Promise<BigNumber>;

    renounceOwnership(overrides?: Overrides): Promise<BigNumber>;

    "renounceOwnership()"(overrides?: Overrides): Promise<BigNumber>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "setApprovedContract(address,uint256)"(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    setQuorum(_quorum: BigNumberish, overrides?: Overrides): Promise<BigNumber>;

    "setQuorum(uint256)"(
      _quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<BigNumber>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "transferxDAI(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<BigNumber>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;

    "vote(uint256,bool)"(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    burners(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "burners(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dScore(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dScore()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    dScoreMod(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "dScoreMod(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    dd(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "dd()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    ds(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "ds()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    freezeFrame(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "freezeFrame(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    freezeMember(
      _member: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "freezeMember(address)"(
      _member: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    frozenAccounts(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "frozenAccounts(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    getProposal(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "getProposal(uint256)"(
      _id: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    minters(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "minters(address)"(
      arg0: string,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    newProposal(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    "newProposal(address,string,bytes)"(
      _target: string,
      _proposalHash: string,
      _calldata: BytesLike,
      overrides?: PayableOverrides
    ): Promise<PopulatedTransaction>;

    owner(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "owner()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalID(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proposalID()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposalTime(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "proposalTime()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    proposals(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    "proposals(uint256)"(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;

    proxyBurnDD(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proxyBurnDD(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    proxyBurnDS(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proxyBurnDS(address,uint256)"(
      _from: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    proxyMintDD(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proxyMintDD(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    proxyMintDS(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "proxyMintDS(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    quorum(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    "quorum()"(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    renounceOwnership(overrides?: Overrides): Promise<PopulatedTransaction>;

    "renounceOwnership()"(overrides?: Overrides): Promise<PopulatedTransaction>;

    setApprovedContract(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setApprovedContract(address,uint256)"(
      _contract: string,
      _privledge: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    setQuorum(
      _quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "setQuorum(uint256)"(
      _quorum: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferOwnership(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferOwnership(address)"(
      newOwner: string,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    transferxDAI(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "transferxDAI(address,uint256)"(
      _to: string,
      _amount: BigNumberish,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    vote(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;

    "vote(uint256,bool)"(
      _ProposalID: BigNumberish,
      supportsProposal: boolean,
      overrides?: Overrides
    ): Promise<PopulatedTransaction>;
  };
}
