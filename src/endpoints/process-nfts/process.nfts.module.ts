import { Module } from '@nestjs/common';
// import { NftWorkerModule } from "src/queue.worker/nft.worker/nft.worker.module";
import { AccountModule } from '../accounts/account.module';
import { CollectionModule } from '../collections/collection.module';
import { NftModule } from '../nfts/nft.module';
import { ProcessNftsService } from './process.nfts.service';

@Module({
  imports: [
    // NftWorkerModule,
    NftModule,
    CollectionModule,
    AccountModule,
  ],
  providers: [ProcessNftsService],
  exports: [ProcessNftsService],
})
export class ProcessNftsModule {}
