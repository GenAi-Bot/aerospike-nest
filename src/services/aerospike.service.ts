import {
  Inject,
  Injectable,
  OnModuleDestroy,
  OnModuleInit,
} from '@nestjs/common'
import { Client as AerospikeClient, ConfigOptions } from 'aerospike'
import { MODULE_OPTIONS_TOKEN } from '../aerospike.module-definition'

@Injectable()
export class AerospikeService implements OnModuleInit, OnModuleDestroy {
  protected client: AerospikeClient

  constructor(
    @Inject(MODULE_OPTIONS_TOKEN)
    private readonly options: ConfigOptions,
  ) {
    this.client = new AerospikeClient(this.options)
  }

  getClient(): AerospikeClient {
    return this.client
  }

  onModuleDestroy() {
    this.client.close()
  }

  async onModuleInit() {
    await this.client.connect()
  }
}
