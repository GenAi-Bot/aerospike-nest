import { ConfigurableModuleBuilder } from '@nestjs/common'
import { ConfigOptions } from 'aerospike'

export const { ConfigurableModuleClass, MODULE_OPTIONS_TOKEN } =
  new ConfigurableModuleBuilder<ConfigOptions>().build()
