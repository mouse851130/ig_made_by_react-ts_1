import { useAppDispatch } from "hook"   // 引入dispatch功能
import { follow, unFollow } from "slices/friendSlice";  // 引入action功能
import { memo } from "react";

type IGUserProps = {
    size?: "medium" | "small";
    showFollow?: boolean;   // 要不要顯示有沒有追蹤
    isFollowing?: boolean;  // 顯次追蹤的狀態(有無追蹤)
    account?: string;
    location?: string;
    avatar?: string;
    id?: number;
};

const IGUser: React.FC<IGUserProps> = memo(
    ({
        size = "small",
        showFollow = false,
        isFollowing = false,
        account,
        location,
        avatar,
        id,
    }) => {
        const dispatch = useAppDispatch()

        // 控制dispatch要送出的東西
        function followClickHandler() {
            if (id === undefined) return;
            if (isFollowing) {
                dispatch(unFollow(id));
            } else {
                dispatch(follow(id));
            }
        }

        return (
            <div className="flex h-[70px] items-center box-border px-4">
                <div
                    className={`${size === "small" ? "w-[40px] h-[40px]" : "w-[60px] h-[60px]"
                        } overflow-hidden rounded-full`}
                    style={{
                        backgroundImage: `url(${avatar})`,
                        backgroundPosition: "center",
                        backgroundSize: "cover",
                    }}
                ></div>
                <div className="ml-4">
                    <p className="font-bold text-sm">{account}</p>
                    <p className="text-gray-400 text-xs">{location}</p>
                </div>
                {showFollow && (
                    <p
                        className={`${isFollowing ? "text-gray-700" : "text-blue-400"
                            } ml-auto text-xs font-bold cursor-pointer`}
                        onClick={followClickHandler}
                    >
                        {isFollowing ? "FOLLOWING" : "FOLLOW"}
                    </p>
                )}
            </div>
        );
    })
    ;

export default IGUser;