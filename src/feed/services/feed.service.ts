import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, UpdateResult, DeleteResult } from 'typeorm';
import { FeedPostEntity } from '../models/post.entity';
import { FeedPost } from '../models/post.interface';
import {Observable,from} from 'rxjs';

@Injectable()
export class FeedService {

constructor(
    @InjectRepository(FeedPostEntity)
    private readonly feedPostRepository : Repository<FeedPostEntity>
){}


createPost(feedpost: FeedPost): Observable<FeedPost>{
    return from(this.feedPostRepository.save(feedpost));
}

FindAllPosts() : Observable<FeedPost[]>
{
    return from(this.feedPostRepository.find());
}


UpdatePost(id:number,feedpost:FeedPost) : Observable<UpdateResult>
{
 return from(this.feedPostRepository.update(id,feedpost));
}

deletePost(id:number) : Observable<DeleteResult>
{
return from(this.feedPostRepository.delete(id));
}






}
