import { Module } from '@nestjs/common'
import { ConfigurableModuleClass } from './aerospike.module-definition'
import { AerospikeService } from './services'

@Module({
  providers: [AerospikeService],
  exports: [AerospikeService],
})
export class AerospikeModule extends ConfigurableModuleClass {}
